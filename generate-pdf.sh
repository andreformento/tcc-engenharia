#!/bin/sh

rm -f monografia.pdf

cd tex

# docker run -it -v "$PWD":/data -w /data andreformento/latex       \
#     rm -rf *.log                                               && \
#     pdflatex monografia.tex                                    && \
#     bibtex monografia.aux                                      && \
#     makeindex monografia.idx                                   && \
#   # makeindex monografia.nlo -s nomencl.ist -o monografia.nls  && \
#     pdflatex monografia.tex                                    && \
#     pdflatex monografia.tex

docker run -it -v "$PWD":/data -w /data andreformento/latex pdflatex -synctex=1 -interaction=nonstopmode monografia.tex
docker run -it -v "$PWD":/data -w /data andreformento/latex bibtex monografia.aux
docker run -it -v "$PWD":/data -w /data andreformento/latex makeindex monografia.tex
docker run -it -v "$PWD":/data -w /data andreformento/latex pdflatex -synctex=1 -interaction=nonstopmode monografia.tex
docker run -it -v "$PWD":/data -w /data andreformento/latex pdflatex -synctex=1 -interaction=nonstopmode monografia.tex

mv monografia.pdf ../

cd ..
./clear.sh
