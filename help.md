# Build and run a docker container

```bash
  sudo docker build -f sae-e-commerce/Dockerfile.prod sae-e-commerce/ -t sae-eco:latest
```

```bash
  sudo docker run --name sae-eco -p 3100:3000/tcp -d sae-eco
```
