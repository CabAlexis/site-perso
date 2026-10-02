# Node n'est pas installé sur la machine : tout passe par un conteneur jetable.
# :z relabellise le montage pour SELinux (Fedora).
IMAGE   := docker.io/library/node:24
MONTAGE := -v $(CURDIR):/app:z -w /app -e ASTRO_TELEMETRY_DISABLED=1 -e NPM_CONFIG_UPDATE_NOTIFIER=false
PODMAN  := podman run --rm $(MONTAGE)
# -it seulement si on a un vrai terminal (sinon podman refuse de démarrer).
TTY     := $(shell [ -t 0 ] && echo -it)
# Serveurs nommés et --replace : relancer remplace l'ancien au lieu de se
# heurter au port déjà pris.
SERVEUR := podman run --rm $(TTY) --replace -p 4321:4321 $(MONTAGE)

.PHONY: install dev build brouillon preview stop

install:   ## Installe les dépendances (npm ci)
	$(PODMAN) $(IMAGE) npm ci

dev:       ## Serveur de développement sur http://localhost:4321
	$(SERVEUR) --name cabalex-dev $(IMAGE) npm run dev

build:     ## Build de production : échoue s'il reste un TODO(cabalex)
	$(PODMAN) $(IMAGE) npm run build

brouillon: ## Build sans le garde-fou, pour relire les pages avec leurs trous
	$(PODMAN) $(IMAGE) npm run build:brouillon

preview: brouillon ## Construit puis sert dist/ sur http://localhost:4321
	$(SERVEUR) --name cabalex-preview $(IMAGE) npm run preview

stop:      ## Arrête dev ou preview s'ils tournent
	-podman stop cabalex-dev cabalex-preview 2>/dev/null
