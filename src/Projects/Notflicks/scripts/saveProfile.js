// Name: Save Profile
class Profile {

    setProfile(p, l, m, ne, pp) {
        this.profileName = p;
        this.language = l;
        this.maturityRating = m;
        this.ANE = ne;
        this.APP = pp;

        this.saveProfile();
    }

    getProfile() {
        document.getElementById("profileID").value = localStorage.getItem('profileName');
        document.getElementById("languageID").value = localStorage.getItem('languageName');
        // document.getElementById("maturityRatingID").value = localStorage.getItem('maturityRatingName');
        document.getElementById("ANEID").value = localStorage.getItem('ANEName');
        document.getElementById("APID").value = localStorage.getItem('APName');
    }

    saveProfile() {
        let storeProfile = document.getElementById('profileID').value;
        localStorage.setItem('profileName', storeProfile);
        let storeLanguage = document.getElementById('languageID').value;
        localStorage.setItem('languageName', storeLanguage);
        let storeMaturityRating = document.getElementById('maturityRatingID').value;
        localStorage.setItem('maturityRatingName', storeMaturityRating);
        let storeANE = document.getElementById('ANEID').value;
        localStorage.setItem('ANEName', storeANE);
        let storeAPP = document.getElementById('APID').value;
        localStorage.setItem('APName', storeAPP);

        alert('Data saved in localStorage succussfully!!')
    }

}

function validateForm(p) {
    p = p || window.event;
    if (p.preventDefault) {
        p.preventDefault();
    } else {
        p.returnValue = false;
    }
    // Profile Name
    var xP = document.forms['Login']['profileName'].value;
    if (xP == null || xP == "") {
        alert("Please enter a profile name");
        document.getElementById('profileID').focus();

    } else if (xP.length < 3) {
        alert("Profile name must be over 3 characters");
        document.getElementById("profileID").focus();

    }

    // Language
    var xL = document.getElementById("dropdown");

    function onChange() {
        var selected = xL.value;
        var textRe = xL.options[xL.selectedIndex].value;
        console.log(selected, textRe);
    }
    xL.onchange = onChange;
    onChange();
    console.log(onChange);

    ////////////////////////////////////////////////
    //// come back to this once slider is made. ////
    ////////////////////////////////////////////////
    ///////////////////////////   //////////////////-
    //////////////////////////   ///////////////////
    /////////////////////////   ////////////////////
    ////////////////////////   /////////////////////
    ////////////////                   /////////////
    /////////////////                ///////////////
    //////////////////             /////////////////
    ///////////////////          ///////////////////
    ////////////////////       /////////////////////
    /////////////////////    ///////////////////////
    ////////////////////// /////////////////////////
    ////////////////////////////////////////////////

    // Maturity Rating

    // xMR = document.forms['Login']['ageField'].value;
    // if (xMR == null || xMR == "") {
    //     alert("age can not be empty");
    //     document.getElementById('age').focus();

    // } else if (parseInt(xMR) < 12 || parseInt(xMR) > 95) {
    //     alert("age should be between 12 and 95");
    //     document.getElementById('age').focus();

    // }

    // Autoplay Next Episode (ANE)
    var checkedValANE = null;
    var inEl = document.getElementsByClassName('ANECheck');
    for (var i = 0; inEl[i]; ++i) {
        if (inEl[i].checked) {
            checkedValANE = inEl[i].value;
            break;
        }
    }

    // Autoplay Previews (AP)
    var checkedValAP = null;
    var inEl = document.getElementsByClassName('APCheck');
    for (var i = 0; inEl[i]; ++i) {
        if (inEl[i].checked) {
            checkedValAP = inEl[i].value;
            break;
        }
    }
}

function UpdateProfile() {
    Profile = new Profile();
    if (validateForm()) {
        Profile.setProfile();
    }
    UpdateProfile()
}
console.log(UpdateProfile);

function displayProfile() {
    m = new Profile();
    console.log(m)
    m.getProfile();
}