
function getTaxes(){
    //Gets values from text boxes
    var grossIncome = document.getElementById("gIncome").value
    var fname = document.getElementById("fname").value
    var lname = document.getElementById("lname").value
    var pin = document.getElementById("pin").value
    //Inserts values from input boxes
    $("#fullName").text(fname + " " + lname)
    $("#grossI").text(grossIncome)
    if(pin.length != 4){
        document.getElementById("pin").style.backgroundColor = "red"
        $("#userPin").text("")
        alert("you must choose a 4 digit pin number")}
    else
    {$("#userPin").text(pin)
    document.getElementById("pin").style.backgroundColor = "white"
    }
    
    //Gets and observes checkbox status
    var yesDeduct = document.getElementById("deduction")
    var noDeduct = document.getElementById("noDeduct")


    //Calculates taxes based on taking the deduction
    if(yesDeduct.checked == true && noDeduct.checked == false)
    {
        var yDeduct = parseInt(grossIncome) - 6300
        
        if(yDeduct == 0 || yDeduct <= 9275){
           document.getElementById("taxDue").innerHTML =  yDeduct * .10
        }
        else if(yDeduct >= 9276 && yDeduct <= 37650){
            $("#taxDue").text(927.50 + (.15*(yDeduct - 9275)))
        }

        else if(yDeduct>=37651 && yDeduct <= 91150){
            $("#taxDue").text(5183.75 +(.25*(yDeduct-37650)))
        }

        else if(yDeduct>= 91151 && yDeduct<= 190150){
            $("#taxDue").text(18558 +(.28*(yDeduct-91150)))
        } 

        else if(yDeduct>= 190151 && yDeduct<= 413350){
            $("#taxDue").text(46278.75 +(.33*(yDeduct - 190150)))
        }

        else if(yDeduct>= 413351 && yDeduct<= 415050){
            $("#taxDue").text(119934.75 + (.35*(yDeduct-413350)))
        }

        else if(yDeduct>415051){
            $("#taxDue").text(120529.75 +(.396*(yDeduct - 415050)))
        }
    }

    // Calculates taxes based on not taking the deduction
    else if(yesDeduct.checked == false && noDeduct.checked == true){
        var nDeduct = parseInt(grossIncome)

        if(nDeduct === 0 || nDeduct <= 9275){
            document.getElementById("taxDue").innerHTML =  nDeduct * .10
         }
         else if(nDeduct >= 9276 && nDeduct <= 37650){
             $("#taxDue").text(927.50 + (.15*(nDeduct - 9275)))
         }
 
         else if(nDeduct>=37651 && nDeduct <= 91150){
             $("#taxDue").text(5183.75 +(.25*(nDeduct-37650)))
         }
 
         else if(nDeduct>= 91151 && nDeduct<= 190150){
             $("#taxDue").text(18558 +(.28*(nDeduct-91150)))
         } 
 
         else if(nDeduct>= 190151 && nDeduct<= 413350){
             $("#taxDue").text(46278.75 +(.33*(nDeduct - 190150)))
         }
 
         else if(nDeduct>= 413351 && nDeduct<= 415050){
             $("#taxDue").text(119934.75 + (.35*(nDeduct-413350)))
         }
 
         else if(nDeduct>415051){
             $("#taxDue").text(120529.75 +(.396*(nDeduct - 415050)))
         }
    }
    //validation for improper deduction status choice
    else if(yesDeduct.checked == true && noDeduct.checked == true){
        alert("please make only one deduction selection")
        yesDeduct.click()
        noDeduct.click()
        $("#taxDue").text("")
    }
    else(alert("Please choose a status"))
}
//form reset function
function resetForm()
{
    //gets elements
    var grossIncome = document.getElementById("gIncome")
    var fname = document.getElementById("fname")
    var lname = document.getElementById("lname")
    var pin = document.getElementById("pin")

    //observes dropdown
    var yesDeduct = document.getElementById("deduction")
    var noDeduct = document.getElementById("noDeduct")

    if(yesDeduct.checked == true && noDeduct.checked == false){
        yesDeduct.click()
    }

    else if(yesDeduct.checked == false && noDeduct.checked == true){
        noDeduct.click()
    }
    else if(yesDeduct.checked == true && noDeduct.checked == true){
        yesDeduct.click()
        noDeduct.click()
    }
    //resets display elements
    grossIncome.value = ""
    fname.value = ""
    lname.value = ""
    pin.value = ""
    $("#fullName").text("")
    $("#grossI").text("")
    $("#taxDue").text("")
    $("#userPin").text("")
}
