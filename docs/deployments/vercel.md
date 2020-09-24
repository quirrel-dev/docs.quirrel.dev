---
title: Deploy to Vercel
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

<img src={require("./vercel-env-vars.png").default} style={{ maxWidth: "500px"}}/>

<br/>
<br/>

That's it! Quirrel is now set up on Vercel.
