var system = require('system');
var commandArguments = system.args;

if(commandArguments.length !== 4 ||
    (commandArguments[2] != 'audit' && commandArguments[2] != 'action')){
    console.log('Usage: phantomjs index.js url reportType folderToSaveImages')
}

var page = require('webpage').create();
var reportType = commandArguments[2];
var folder = commandArguments[3];
var url = commandArguments[1];

page.open(url, function (status) {
    if (status !== 'success') {
        console.log('Unable to load ', + url);
        phantom.exit();
    }
    else {
        setTimeout(function () {
            function printPage(selector, pageNumber) {
                try{
                    var elementBounds = page.evaluate(function (selector) {

                        var clipRect = document.querySelector(selector).getBoundingClientRect();
                        return {
                            top: clipRect.top,
                            left: clipRect.left,
                            width: clipRect.width,
                            height: clipRect.height
                        };

                    }, selector);
                    var oldClipRect = page.clipRect;
                    page.clipRect = elementBounds;
                    page.render(folder + pageNumber + '.png');
                    page.clipRect = oldClipRect;  // Restore the page's clipRect
                }
                catch(e){
                    console.log(e);
                    phantom.exit();
                }
            }

            if (reportType === 'audit') {
                printPage('#header-page', 1);
                printPage('#masterfile-audit-revenue', 2);
                printPage('#snap-of-donor', 3);
                printPage('#revenue-dashboard', 4);
                printPage('#total-gross', 5);
                printPage('#life-time-value', 6);
                printPage('#donor-and-revenue-distribution', 7);
                printPage('#revenue-distribution', 8);
                printPage('#donor-value', 9);
                printPage('#donor-file-health', 10);
                printPage('#loyalty-and-retention', 11);
                printPage('#donor-dashboard', 12);
                printPage('#donor-retention', 13);
                printPage('#new-donor-acquisition', 14);
                printPage('#active-file-size', 15);
                printPage('#new-donor-retention', 16);
                printPage('#retention-rates', 17);
                printPage('#upgrading', 18);
                printPage('#lapsed-reactivation', 19);
                printPage('#master-file-audit-summary', 20);
                printPage('#file-audit-summary', 21);
                printPage('#summary-of-file', 22);

            }
            else {
                printPage('#first-page-header', 1);
                printPage('#action-plan-overview', 2);
                printPage('#action-plan-define-objects', 3);
                printPage('#retention-action-plan-define-objects', 4);
                printPage('#retention-action-plan-set-goal', 5);
                printPage('#retention-action-plan-target-existing-donors', 6);
                printPage('#retention-action-plan-backstest-methodology', 7);
                printPage('#retention-action-plan-existing-donor-backtest', 8);
                printPage('#retention-action-plan-existing-donor-clusters', 9);
                printPage('#retention-action-plan-existing-donor-contact-strategy', 10);
                printPage('#retention-action-plan-target-single-gift-donors', 11);
                printPage('#retention-action-plan-single-gift-backtest', 12);
                printPage('#retention-action-plan-single-gift-donor-clusters', 13);
                printPage('#reactivation-action-plan-set-goals', 14);
                printPage('#retention-action-plan-target-lapsed-donors', 15);
                printPage('#retention-action-plan-lapsed-donor-backtasks', 16);
                printPage('#reactivation-action-plan-lapsed-donor-clusters', 17);
                printPage('#retention-action-plan-lapsed-donor-contract-strategy', 18);

                printPage('#upgrade-action-plan-define-objects', 19);
                printPage('#upgrade-action-plan-set-goals', 20);
                printPage('#upgrade-action-plan-target-likely-upgrades', 21);
                printPage('#upgrade-action-plan-mid-level-donor-backtest', 22);
                printPage('#upgrade-action-plan-regular-and-mid-level-upgrade-clusters', 23);
                printPage('#upgrade-action-plan-major-donor-backtest', 24);
                printPage('#upgrade-action-plan-major-donor-upgrade-cluster', 25);
                printPage('#monthly-giving-action-plan-sustainer-donor-clusters', 26);
                printPage('#planed-giving-action-plan-legacy-donor-clusters', 27);
                printPage('#summary-of-donorsscores', 28);
                printPage('#action-plan-get-started', 29);
                printPage('#appendix', 30);
                printPage('#appeals-and-renewals', 31);
                printPage('#single-gift-donor-backtest', 32);
                printPage('#lapsed-reactivation', 33);
                printPage('#mid-level-upgrade', 34);
                printPage('#major-donor-upgrade-backtest', 35);
            }


            phantom.exit();
        }, 2000);
    }
});
