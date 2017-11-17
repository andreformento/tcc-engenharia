#!/bin/sh

rm -f monografia.pdf

cd tex

rm -rf referencias-bibliograficas-sem-citacao.tex

grep '^ *@.*{.*,' referencias-bibliograficas.bib > referencias-bibliograficas-sem-citacao.tex
sed -i 's/,/}/g' referencias-bibliograficas-sem-citacao.tex
sed -i 's/@.*{/\\nocite{/g' referencias-bibliograficas-sem-citacao.tex


# docker run -it -v "$PWD":/data -w /data andreformento/latex       \
#     rm -rf *.log                                               && \
#     pdflatex monografia.tex                                    && \
#     bibtex monografia.aux                                      && \
#     makeindex monografia.idx                                   && \
#   # makeindex monografia.nlo -s nomencl.ist -o monografia.nls  && \
#     pdflatex monografia.tex                                    && \
#     pdflatex monografia.tex

docker run --rm -it -v "$PWD":/data -w /data andreformento/latex pdflatex -synctex=1 -interaction=nonstopmode monografia.tex
docker run --rm -it -v "$PWD":/data -w /data andreformento/latex bibtex monografia.aux
docker run --rm -it -v "$PWD":/data -w /data andreformento/latex makeindex monografia.tex
docker run --rm -it -v "$PWD":/data -w /data andreformento/latex pdflatex -synctex=1 -interaction=nonstopmode monografia.tex
docker run --rm -it -v "$PWD":/data -w /data andreformento/latex pdflatex -synctex=1 -interaction=nonstopmode monografia.tex

mv monografia.pdf ../

cd ..
./clear.sh
