sudo docker kill sae-ecommerce
sudo docker rm sae-ecommerce
sudo docker run --name sae-ecommerce -p 3100:3000/tcp -d sae-ecommerce