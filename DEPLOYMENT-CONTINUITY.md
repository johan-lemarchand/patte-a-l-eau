# Production deployment — Patte à l’eau

State observed on 1 October 2026 on SAMY-PATTE: Nginx routes the main public
traffic to `gt-patte-candidate:3000`, created outside the initial Compose
deployment on `samy-repare_samy-network` (private port `127.0.0.1:13002`).
The original `patte-a-l-eau` container remains running only for old
`/_next/static/` assets and routing rollback. Do not stop or recreate it
without a qualified continuity procedure.

The original Compose service is no longer the public release. A future image
change must first start a separate healthy candidate, check schema/session
compatibility, long connections, assets, volumes and duplicate workers, then
switch Nginx routing gracefully while keeping the previous version for drain
and rollback. Recreating the original Compose service alone does not publish
the routed image or prove continuity.

The first cutover procedure and receipts are documented in the KitVPS repo at
`scripts/deployment/legacy-nginx-ops.md`; root-only server state is under
`/root/gt-rollout-20261001/`. The dated script cannot be reused unchanged for
the next release.
