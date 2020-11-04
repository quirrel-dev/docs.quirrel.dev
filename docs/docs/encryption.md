---
title: Configuring Encryption
---

Production deployments are required to use end-to-end-encryption.

1. Generate your 32-character-long secret.
    `openssl rand -hex 16` or 
    [random.org](https://www.random.org/strings/?num=2&len=16&digits=on&upperalpha=on&loweralpha=on&unique=on&format=html&rnd=new) works great.
1. Set the `QUIRREL_ENCRYPTION_SECRET` environment variable to your secret.

