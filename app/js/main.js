var app = 'hallo';
DB.connect(app).then()
{
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

    function setDesign(id, designer, color, galery, material, information, voteCounter, competitionId, category, comment) {
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


};