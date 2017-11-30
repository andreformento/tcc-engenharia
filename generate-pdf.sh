#!/bin/sh

rm -f monografia.pdf
rm -f monografia.docx

cd tex

# gerar arquivo de referências sem citações
rm -rf referencias-bibliograficas-sem-citacao.tex
docker run --rm -it -v "$PWD":/data -w /data andreformento/latex grep '^ *@.*{.*,' referencias-bibliograficas.bib > referencias-bibliograficas-sem-citacao.tex
docker run --rm -it -v "$PWD":/data -w /data andreformento/latex sed -i 's/,/}/g' referencias-bibliograficas-sem-citacao.tex
docker run --rm -it -v "$PWD":/data -w /data andreformento/latex sed -i 's/@.*{/\\nocite{/g' referencias-bibliograficas-sem-citacao.tex

# gerar PDF de maneira personalizada
docker run --rm -it -v "$PWD":/data -w /data andreformento/latex pdflatex -synctex=1 -interaction=nonstopmode monografia.tex
docker run --rm -it -v "$PWD":/data -w /data andreformento/latex bibtex monografia.aux
docker run --rm -it -v "$PWD":/data -w /data andreformento/latex makeindex monografia.tex
docker run --rm -it -v "$PWD":/data -w /data andreformento/latex pdflatex -synctex=1 -interaction=nonstopmode monografia.tex
docker run --rm -it -v "$PWD":/data -w /data andreformento/latex pdflatex -synctex=1 -interaction=nonstopmode monografia.tex

# docker run --rm -it -v "$PWD":/data -w /data andreformento/latex pandoc -t docx -f latex -o monografia.docx monografia.tex

mv monografia.pdf ../
#mv monografia.docx ../

cd ..
./clear.sh
