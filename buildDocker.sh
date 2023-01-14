cd ~/ && sudo docker kill sae-eco && sudo docker rm sae-eco
cd ~/ && sudo docker build -f sae-e-commerce/Dockerfile.prod sae-e-commerce/ -t sae-eco:latest
cd ~/ && sudo docker run --name sae-eco -p 3100:3000/tcp -d sae-eco
