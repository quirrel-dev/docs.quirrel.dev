---
title: Vercel
---

This guide assumes you've already setup your account on [quirrel.dev](https://quirrel.dev) (the hosted Quirrel instance).

1. Create a new project on the [Quirrel Dashboard](https://quirrel.dev/dashboard).

<img src={require("./create-project.png").default} style={{ maxWidth: "500px"}}/>

2. Add a new client and take note of the token.

<div>
<div style={{ float: "left", width: "48%", padding: "5px" }}>
    <img src={require("./create-client.png").default}/>
</div>

<div style={{ float: "left", width: "4%", marginTop: "50px" }}>
👉
    
</div>

<div style={{ float: "left", width: "48%", padding: "5px" }}>
    <img src={require("./copy-token.png").default}/>
</div>
<div style={{ clear: "both" }}/>
</div>

3. In the [Vercel Dashboard](https://vercel.com), paste it into the `QUIRREL_TOKEN` environment variable.

<img src={require("./vercel-env-vars.png").default} style={{ maxWidth: "500px" }}/>

4. Set the `QUIRREL_BASE_URL` environment variable to the location URL your deployment is reachable on, e.g. `https://mywebsite.com`. This is the URL that Quirrel will make its calls against.


## Setting up end-to-end encryption
TODO: fit in
Production deployments are required to use end-to-end-encryption.

1. Generate your 32-character-long secret.
    `openssl rand -hex 16` or 
    [random.org](https://www.random.org/strings/?num=2&len=16&digits=on&upperalpha=on&loweralpha=on&unique=on&format=html&rnd=new) works great.
1. Set the `QUIRREL_ENCRYPTION_SECRET` environment variable to your secret.



5. [Set up Encryption](/encryption)

<br/>
<br/>

That's it! Quirrel is now set up on Vercel.
