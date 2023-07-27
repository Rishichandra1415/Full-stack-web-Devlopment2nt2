//in this we can know about the how to export the own module through file

module.exports = getdate;// in this we cn use the module.exports"it is use for export the module inside the file->in this we can export the function "
function getdate() {
    let today = new Date();
    let option = {
        weekday: "long",
        day: "2-digit",
        month: "long",
    };
    let day = today.toLocaleDateString("en-IN", option);
    return day;
}