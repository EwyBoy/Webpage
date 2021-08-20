const projectIDs = [
    '250603',
    '242436',
    '247369',
    '268210',

    '355143',
    '256991',
    '227277',
    '246996',

    '243951',
    '228809',
    '283415',
    '237695',
]

function initialize() {
    for (let projectID of projectIDs) {
        console.log(projectID.toString())
        getProjectDownloads(projectID);
    }
}

function httpGet(projectID) {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", 'https://api.cfwidget.com/' + projectID, false );
    xmlHttp.send( null );

    return xmlHttp.responseText;
}

function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function getProjectDownloads(projectID) {
    const webpage = document.getElementById(projectID);

    let modJson = httpGet(projectID);
    let modObj = JSON.parse(modJson);

    let downloads = modObj.downloads.total;
    console.log(formatNumber(downloads))

    webpage.innerHTML = formatNumber(downloads) + ' downloads';
}

