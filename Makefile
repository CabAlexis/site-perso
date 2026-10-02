# Node n'est pas installé sur la machine : tout passe par un conteneur jetable.
# :z relabellise le montage pour SELinux (Fedora).
IMAGE   := docker.io/library/node:24
MONTAGE := -v $(CURDIR):/app:z -w /app -e ASTRO_TELEMETRY_DISABLED=1 -e NPM_CONFIG_UPDATE_NOTIFIER=false
PODMAN  := podman run --rm $(MONTAGE)

.PHONY: install dev build brouillon preview

install:   ## Installe les dépendances (npm ci)
	$(PODMAN) $(IMAGE) npm ci

dev:       ## Serveur de développement sur http://localhost:4321
	$(PODMAN) -it -p 4321:4321 $(IMAGE) npm run dev

build:     ## Build de production : échoue s'il reste un TODO(cabalex)
	$(PODMAN) $(IMAGE) npm run build

brouillon: ## Build sans le garde-fou, pour relire les pages avec leurs trous
	$(PODMAN) $(IMAGE) npm run build:brouillon

preview:   ## Sert dist/ sur http://localhost:4321
	$(PODMAN) -it -p 4321:4321 $(IMAGE) npm run preview
