
var app = 'hallo';
DB.connect(app, true).then(function()
    {
        isLoggedIn();
        competitionName();
})

function setCategory(name, limit, id) {
    var category = new DB.Category;
    category.name = name;
    category.voteLimitPerPerson = limit;
    category.idCategory = id;
    category.save();
}

function setCompetition(id, season, theme, ideaFrom, category, time) {
    var competition = new DB.Competition;
    competition.idCompetition = id;
    competition.season = season;
    competition.theme = theme;
    competition.ideaFrom = ideaFrom;
    competition.category = category;
    competition.time = time;
    competition.save();
}

function setDesign(id, designer, color, galery, material, information, voteCounter, competitionId, category, comment){
    var design = new DB.Design;
    design.idDesign = id;
    design.designer = designer;
    design.color = color;
    design.galery = galery;
    design.material = material;
    design.information = information;
    design.voteCounter = voteCounter;
    design.competitionId = competitionId;
    design.category = category;
    design.comment = comment;
    design.save();
}

function test(){
    var pic = DB.File('/file/www/images/Pic01.jpg');
    var pic2 = DB.File('/file/www/images/Pic2.jpg');
    var pic3 = DB.File('/file/www/images/Pic3.jpg');
    var pic4 = DB.File('/file/www/images/Pic4.jpg');
    setDesign(123,"feli-castrian@msn.com","red or blue", [pic,pic2,pic3,pic4] , "Baumwolle", "schöner Schnitt", 0, 55555, "shirts", "ich bin ein Kommentar");
}