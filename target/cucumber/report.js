$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:authentificationOK.feature");
formatter.feature({
  "name": "Authentification",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Authentification réussie",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@MYUNISOT_AUTHENTIFICATION"
    }
  ]
});
formatter.step({
  "name": "j ouvre l application MyUnisoft",
  "keyword": "Given "
});
formatter.step({
  "name": "je saisis une adresse mail \"\u003cmail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "je saisis un mot de passe \"\u003cMDP\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "je coche la premiere case des conditions générales",
  "keyword": "And "
});
formatter.step({
  "name": "Je coche la deuxiéme case j\u0027accepte",
  "keyword": "And "
});
formatter.step({
  "name": "je clique sur Se connecter",
  "keyword": "And "
});
formatter.step({
  "name": "Dashboard est affiché",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "mail",
        "MDP"
      ]
    },
    {
      "cells": [
        "user.test.cabinet+myunisoft_candidat@myunisoft.fr",
        "G00D_LuCk"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Authentification réussie",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@MYUNISOT_AUTHENTIFICATION"
    }
  ]
});
formatter.step({
  "name": "j ouvre l application MyUnisoft",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepAuthentification.jouvrelapplicationMyUnisoft()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "je saisis une adresse mail \"user.test.cabinet+myunisoft_candidat@myunisoft.fr\"",
  "keyword": "When "
});
formatter.match({
  "location": "MyStepAuthentification.jeSaisisUneAdresseMail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "je saisis un mot de passe \"G00D_LuCk\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepAuthentification.jeSaisisUnMotDePasse(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "je coche la premiere case des conditions générales",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepAuthentification.jeCocheLaPremiereCaseDesConditionsGénérales()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Je coche la deuxiéme case j\u0027accepte",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepAuthentification.jeCocheLaDeuxiémeCaseJAccepte()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "je clique sur Se connecter",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepAuthentification.jeCliqueSurSeConnecter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Dashboard est affiché",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepAuthentification.DashboardEstAffiché()"
});
formatter.result({
  "status": "passed"
});
});