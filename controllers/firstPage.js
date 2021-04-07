const Info = require('../models/firstPage');

exports.getEditInfo = (req, res) =>{
    const editMode = true;
    const infoId = 1;

    Info.findById(infoId, info => { console.log(info)
        if(!info) {
            return res.redirect('/');
        }
        res.render('admin/edit.ejs', {
            pageTitle: 'Edit Info',
            path: '/admin/edit',
            editing: editMode,
            info: info
        });

    });
}; 

exports.postEditInfo = (req, res) => {
    const infoId = 1;
    const updatedName = req.body.name;
    const updatedImageUrl = req.body.imageUrl;
    const updatedAchievement = req.body.achievement;

    const updatedInfos = new Info(infoId, updatedName, updatedImageUrl, updatedAchievement);
    updatedInfos.save();

};

exports.getInfos = (req, res) => {
    Info.fetchAll(infos => {
        res.render('admin/firstPage.ejs',
        {
            infos: infos, 
            pageTitle: 'Admin Info',
            path: '/admin/firstPage'
        }
        );
    });
};