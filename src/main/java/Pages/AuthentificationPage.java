package Pages;


import Commun.Hooks;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

    public class AuthentificationPage extends Hooks{
         String xpathCaseCG = "//*[@id=\"root\"]/div[1]/div[2]/form/div[2]/label/div/span/input";
         String xpathCaseUtilisDonnees = "//*[@id=\"root\"]/div[1]/div[2]/form/div[3]/label/div/span/input";
         String xpathbtnSeConnecter = "//*[@id=\"root\"]/div[1]/div[2]/form/div[1]/button[2]";

         String xpathDashboard = "//*[@id=\"WeekDashboard\"]/div[3]/div/div[3]/div/button/span[1]";

        //Saisir mail
        public void saisirAdresseMail(String mail) {
            WebElement adresseMail = driver.findElement(By.id("mail"));
            adresseMail.sendKeys(mail);
        }

        //Saisir un mot de passe
        public void saisirMotDePasse(String mdp) {
            WebElement mdpElt = driver.findElement(By.id("password"));
            mdpElt.sendKeys(mdp);
        }

        //click conditions generales
        public void cocherCG() {
            WebElement caseCG = driver.findElement(By.xpath(xpathCaseCG));
            caseCG.click();
        }

        //click utilisation données
        public void cocherUtiliDonnes() {
            WebElement caseUtiliDonnes = driver.findElement(By.xpath(xpathCaseUtilisDonnees));
            caseUtiliDonnes.click();
        }

        //cliquer sur bouton se connecter
        public void clickBtnSeConnecter() {
            WebElement btnLogin = driver.findElement(By.xpath(xpathbtnSeConnecter));
            btnLogin.click();
        }

        public void dashbordAffiché(){
            WebElement dashboard = driver.findElement(By.xpath(xpathDashboard));
            Assert.assertTrue(dashboard.isDisplayed());
        }
    }
