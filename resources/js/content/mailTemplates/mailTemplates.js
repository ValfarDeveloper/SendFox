import draftToHtml from 'draftjs-to-html'; 

$(document).ready(() => {
    initialConfig();
});

function initialConfig(){
    renderEmailTemplatesBodies();
}

function renderEmailTemplatesBodies(){
    let emailTemplatesBodies = $('#mail-templates').find('.body');

    for(let emailTemplateBody of emailTemplatesBodies){
        emailTemplateBody = $(emailTemplateBody);
        let dataBody = emailTemplateBody.data('body');

        removeNullLinesOfDraftObject(dataBody);

        let bodyHtml = draftToHtml(dataBody);

        emailTemplateBody.append(bodyHtml);
    }
}

/**
 * DraftJS has a bug in the method ConvertFromRaw, when a line is empty,
 * because they are not validating if the text property of the line is null before call .length.
 * This issue affects all the libraries for convert the draft raw to html, for that reason i create this temporal solution. 
 * Basically we remove all the blocks which have the text property null, before call the methods for convert the content to html.
 */
function removeNullLinesOfDraftObject(draftObject){
    for(let [index, block] of draftObject.blocks.entries()){
        if(block.text === null){
            delete draftObject.blocks[index];
        }
    }
}