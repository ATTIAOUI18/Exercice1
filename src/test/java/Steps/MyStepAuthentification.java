package Steps;

import Commun.Hooks;
import Pages.AuthentificationPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class MyStepAuthentification extends Hooks {
AuthentificationPage authPage = new AuthentificationPage();
        @Given("j ouvre l application MyUnisoft")
        public void jouvrelapplicationMyUnisoft() {
            super.initDriver();
            System.out.println("Ouverture Application");
        }

        @When("je saisis une adresse mail {string}")
        public void jeSaisisUneAdresseMail(String mail) {
            authPage.saisirAdresseMail(mail);
        }

    @And("je saisis un mot de passe {string}")
    public void jeSaisisUnMotDePasse(String mdp) {
            authPage.saisirMotDePasse(mdp);
    }

    @And("je coche la premiere case des conditions générales")
    public void jeCocheLaPremiereCaseDesConditionsGénérales() {
            authPage.cocherCG();
    }

    @And("Je coche la deuxiéme case j'accepte")
    public void jeCocheLaDeuxiémeCaseJAccepte() {
            authPage.cocherUtiliDonnes();
    }

    @And("je clique sur Se connecter")
    public void jeCliqueSurSeConnecter() {
            authPage.clickBtnSeConnecter();
    }

    @Then("Dashboard est affiché")
    public void DashboardEstAffiché() {
    }
}
