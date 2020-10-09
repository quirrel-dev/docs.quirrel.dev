---
title: FAQ
---

## My encryption secret has been leaked. What now?

First of all: Don't panic. The leaked encryption key allows attackers to read the payload of pending jobs, but only if they *also* gained access to your Quirrel API deployment ([managed](https://quirrel.dev) or self-hosted).

Replacing your leaked secret with a new one, do the following:

1. Set the `QUIRREL_OLD_SECRETS` environment variable to `["<your-leaked-secret>"]`. This will allow old jobs to be decrypted.
2. Set `QUIRREL_ENCRYPTION_SECRET` to your new secret.
3. Once all jobs that were encrypted with the old secret executed, remove `QUIRREL_OLD_SECRETS`.

If you're using the managed Quirrel deployment, feel free to [reach out](mailto:info@quirrel.dev) to get further assistance.