
Feature: Authentification

  @MYUNISOT_AUTHENTIFICATION
  Scenario Outline:  Authentification réussie
    Given j ouvre l application MyUnisoft
    When  je saisis une adresse mail "<mail>"
    And   je saisis un mot de passe "<MDP>"
    And   je coche la premiere case des conditions générales
    And   Je coche la deuxiéme case j'accepte
    And   je clique sur Se connecter
    Then  Dashboard est affiché


    Examples:
      |mail                                                     | MDP|
      |user.test.cabinet+myunisoft_candidat@myunisoft.fr        |G00D_LuCk|
