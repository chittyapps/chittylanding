# ChittyLanding Charter

## Classification
- **Canonical URI**: `chittycanon://core/services/chittylanding`
- **Tier**: 5 (Application)
- **Organization**: chittyapps
- **Domain**: chittylanding.chitty.cc

## Mission

Landing page for chitty.cc. Public-facing website for the ChittyOS ecosystem.

## Scope

### IS Responsible For
- Public website, landing page, ecosystem overview

### IS NOT Responsible For
- Identity generation (ChittyID)
- Token provisioning (ChittyAuth)

## Dependencies

| Type | Service | Purpose |
|------|---------|---------|
| Upstream | ChittyAuth | Authentication |

## API Contract

**Base URL**: https://chittylanding.chitty.cc

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/health` | GET | Service health |

## Ownership

| Role | Owner |
|------|-------|
| Service Owner | chittyapps |

## Compliance

- [ ] Registered in ChittyRegister
- [ ] Health endpoint operational at /health
- [ ] CLAUDE.md present
- [ ] CHARTER.md present
- [ ] CHITTY.md present

---
*Charter Version: 1.0.0 | Last Updated: 2026-02-21*