function HouseKeeper(name, workExperience, gender, workPermit,languages, workAffinity){
    this.name=name;
    this.workExperience=workExperience;
    this.gender=gender;
    this.workPermit=workPermit;
    this.languages=languages;
    this.workAffinity=workAffinity;
    this.cleaning=function(){ alert("cleaning in Progress");}
}

var housekeeper1= new HouseKeeper("Ranisa",40, "Female", "Yes", ["Bangla","English","Hindi","Uganda"], ["HouseKeeping","Cleaning","Bathroom Wasing"]);
var housekeeper2= new HouseKeeper("Bulma",30, "Female", "Yes", ["Bangla","English","Hindi","Uganda"], ["HouseKeeping","Cleaning","Bathroom Wasing"]);
housekeeper1.gender;
housekeeper1.name;
housekeeper1.workAffinity

housekeeper2.name;
housekeeper2.languages;
housekeeper2.workAffinity;
housekeeper1.cleaning();
housekeeper2.cleaning();