<template>
    <h1 class="text-5xl title-style text-secondary underline-long-title w-2/6">Mes expériences</h1>
    <div class="timeline">
        <div class="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
            <div class="timeline__event__icon">
                <font-awesome-icon icon="fa-solid fa-computer fa-2xl"/>

            </div>
            <div class="timeline__event__date whitespace-normal md:whitespace-nowrap">
                Avril 2021 à aujourd'hui
            </div>
            <div class="timeline__event__content">
                <div class="timeline__event__title mb-4">
                    Développeur FullStack web et web mobile
                </div>
                <div class="timeline__event__description">
                    <ul class="list-disc list-inside">
                        <li>
                            Participer au développement et à la maintenance de projets web.
                        </li>
                        <li>
                            Réaliser un backoffice en TALL Stack (Tailwind Alpine Laravel Livewire) pour un e-commerce en
                            ligne.
                        </li>
                        <li>
                            Créer une API REST Laravel pour la refonte d'un CRM.
                        </li>
                        <li>
                            Créer un front en Nuxt3 (framework VueJS).
                        </li>
                        <li>
                            Mise en place d'un front en VueJS 3
                        </li>
                        <li>
                            Créer une API NodeJS (Express) pour un projet interne
                        </li>
                        <li>
                            Mise en place d'un Dockerfile, gestion de différents projets sous Docker
                        </li>
                        <li>
                            Conceptualiser une base de données
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="timeline__event animated fadeInUp delay-2s timeline__event--type2">
            <div class="timeline__event__icon">
                <font-awesome-icon icon="fa-solid fa-database" />

            </div>
            <div class="timeline__event__date">
                Septembre 2020
            </div>
            <div class="timeline__event__content">
                <div class="flex justify-between items-center">
                <div class="timeline__event__title mb-4">
                    Développeur Backend
                </div>
                <small>Projet de fin de formation</small>
            </div>
                <div class="timeline__event__description">
                    <ul class="list-disc list-inside">
                        <li>Réaliser une API Rest avec Symfony
                        </li>
                        <li>Versionner le code sur github</li>
                        <li>Collaborer en équipe</li>
                        <li>Déploiement via AWS</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="timeline__event animated fadeInUp delay-1s timeline__event--type3">
            <div class="timeline__event__icon">
                <font-awesome-icon icon="fa-solid fa-blender-phone" />

            </div>
            <div class="timeline__event__date">
                Septembre 2018 à Juillet 2019
            </div>
            <div class="timeline__event__content">
                <div class="timeline__event__title mb-4">
                    Commercial web
                </div>
                <div class="timeline__event__description">
                    <ul class="list-disc list-inside">
                        <li>Accompagner un client dans la mise en place d'un site commercial</li>
                        <li>Comprendre la mise en place et le fonctionnement d'un site commercial</li>
                        <li>Réaliser la demonstration de nos produits aux futurs clients (Sites, Back Office)</li>
                        <li>Organiser des mailings marketing</li>
                    </ul>
                </div>

            </div>
        </div>
        <div class="timeline__event animated fadeInUp timeline__event--type1">
            <div class="timeline__event__icon">
                <!-- <icon :icon="['fas', 'moped']" /> -->
                <font-awesome-icon icon="fa-solid fa-utensils" />

            </div>
            <div class="timeline__event__date">
                Novembre 2013 à Septembre 2017
            </div>
            <div class="timeline__event__content">
                <div class="timeline__event__title mb-4">
                    Livreur, Serveur puis Manager en restauration japonaise
                </div>
                <div class="timeline__event__description">
                    <ul class="list-disc list-inside">
                        <li>Organiser les plannings d'une équipe de 10 personnes</li>
                        <li>Gérer les stocks et les apprivisionnement</li>
                        <li>Plannifier les livraisons des commandes lors des services</li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
</template>
<script setup>
definePageMeta({
    layout: 'custom'
})
</script>
<style lang="scss" scoped>
$content-width: calc(40vw - 84px);
$margin: 20px;
$spacing: 20px;
$bdrs: 6px;
$circle-size: 40px;
$icon-size: 32px;
$bdrs-icon: 100%;

$color1: #164E63;
$color2: #FFF7D6;

$color3: #164E63;
$color4: #FFF7D6;

$color5: #164E63;
$color6: #FFF7D6;

* {
    box-sizing: border-box;
}

html {
    font-size: 14px;
}

body {
    background: #f6f9fc;
    font-family: "Open Sans", sans-serif;
    color: #525f7f;
}

h2 {
    margin: 5%;
    text-align: center;
    font-size: 2rem;
    font-weight: 100;
}

.timeline {
    display: flex;
    flex-direction: column;
    margin: $margin auto;
    position: relative;

    &__event {
        margin-bottom: $spacing;
        position: relative;
        display: flex;
        margin: $spacing 0;
        border-radius: $bdrs;
        align-self: center;
        width: 50vw;

        &:nth-child(2n + 1) {
            flex-direction: row-reverse;

            .timeline__event__date {
                border-radius: 0 $bdrs $bdrs 0;
            }

            .timeline__event__content {
                border-radius: $bdrs 0 0 $bdrs;
            }

            .timeline__event__icon {
                &:before {
                    content: "";
                    width: 2px;
                    height: 100%;
                    background: $color2;
                    position: absolute;
                    top: 0%;
                    left: 50%;
                    right: auto;
                    z-index: -1;
                    transform: translateX(-50%);
                    animation: fillTop 2s forwards 4s ease-in-out;
                }

                &:after {
                    content: "";
                    width: 100%;
                    height: 2px;
                    background: $color2;
                    position: absolute;
                    right: 0;
                    z-index: -1;
                    top: 50%;
                    left: auto;
                    transform: translateY(-50%);
                    animation: fillLeft 2s forwards 4s ease-in-out;
                }
            }
        }

        &__title {
            font-size: 1.2rem;
            line-height: 1.4;
            text-transform: uppercase;

            font-weight: 600;
            color: $color1;
            letter-spacing: 1.5px;
        }

        &__content {
            padding: $spacing;
            box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
                0 18px 36px -18px rgba(0, 0, 0, 0.3),
                0 -12px 36px -8px rgba(0, 0, 0, 0.025);
            background: #fff;
            width: $content-width;
            border-radius: 0 $bdrs $bdrs 0;
        }

        &__date {
            color: $color2;
            font-size: 1.5rem;
            font-weight: 600;
            background: $color1;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 $spacing;
            border-radius: $bdrs 0 0 $bdrs;
        }

        &__icon {
            display: flex;
            align-items: center;
            justify-content: center;
            color: $color1;
            padding: $spacing;
            align-self: center;
            margin: 0 $spacing;
            background: $color2;
            border-radius: $bdrs-icon;
            width: $circle-size;
            box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
                0 18px 36px -18px rgba(0, 0, 0, 0.3),
                0 -12px 36px -8px rgba(0, 0, 0, 0.025);
            padding: 40px;
            height: $circle-size;
            position: relative;

            i {
                font-size: $icon-size;
            }

            &:before {
                content: "";
                width: 2px;
                height: 100%;
                background: $color2;
                position: absolute;
                top: 0%;
                z-index: -1;
                left: 50%;
                transform: translateX(-50%);
                animation: fillTop 2s forwards 4s ease-in-out;
            }

            &:after {
                content: "";
                width: 100%;
                height: 2px;
                background: $color2;
                position: absolute;
                left: 0%;
                z-index: -1;
                top: 50%;
                transform: translateY(-50%);
                animation: fillLeftOdd 2s forwards 4s ease-in-out;
            }
        }

        &__description {
            flex-basis: 60%;
        }

        &--type2 {
            &:after {
                background: $color1;
            }

            .timeline__event__date {
                color: $color1;
                background: $color2;
            }

            &:nth-child(2n + 1) {
                .timeline__event__icon {
                    &:before,
                    &:after {
                        background: $color2;
                    }
                }
            }

            .timeline__event__icon {
                background: $color1;
                color: $color2;

                &:before,
                &:after {
                    background: $color1;
                }
            }

            .timeline__event__title {
                color: $color1;
            }
        }

        &--type3 {
            &:after {
                background: $color2;
            }

            .timeline__event__date {
                color: $color2;
                background-color: $color1;
            }

            &:nth-child(2n + 1) {
                .timeline__event__icon {
                    &:before,
                    &:after {
                        background: $color2;
                    }
                }
            }

            .timeline__event__icon {
                background: $color2;
                color: $color1;
                &:before,
                &:after {
                    color: $color1;
                    background: $color1;
                }
            }

            .timeline__event__title {
                color: $color1;
            }
        }

        &:last-child {
            .timeline__event__date {
                color: $color1;
                background-color: $color2;
            }

            .timeline__event__icon {
                background: $color1;
                color: $color2;
                &:before,
                &:after {
                    color: $color1;
                    background: $color1;
                }
            }
        }
    }
}

@media (max-width: 1200px) {
    .timeline__event {
        flex-direction: column;
        align-self: center;

        &__content {
            width: 100%;
        }

        &__icon {
            border-radius: $bdrs $bdrs 0 0;
            width: 100%;
            margin: 0;
            box-shadow: none;

            &:before,
            &:after {
                display: none;
            }
        }

        &__date {
            border-radius: 0;
            padding: $spacing;
        }

        &:nth-child(2n + 1) {
            flex-direction: column;
            align-self: center;

            .timeline__event__date {
                border-radius: 0;
                padding: $spacing;
            }

            .timeline__event__icon {
                border-radius: $bdrs $bdrs 0 0;
                margin: 0;
            }
        }
    }
}

@keyframes fillLeft {
    100% {
        right: 100%;
    }
}

@keyframes fillTop {
    100% {
        top: 100%;
    }
}

@keyframes fillLeftOdd {
    100% {
        left: 100%;
    }
}

li:not(:last-child) {
    margin-bottom: 1rem;
}</style>