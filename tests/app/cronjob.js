'use strict';

describe('Cronjob tests', function() {

  it('List scope', function() {
    browser.get('#!/cronjob');

    var routes = element.all(by.repeater('cronjob in cronjobs'));
    expect(routes.count()).toEqual(1);
    expect(routes.get(0).getText()).toEqual('Test-Cron');
  });

  it('Create cronjob', function() {
    browser.get('#!/cronjob');

    var EC = protractor.ExpectedConditions;

    $('a.btn-primary').click();

    browser.wait(EC.visibilityOf($('div.modal-body')), 5000);

    element(by.model('cronjob.name')).sendKeys('New-Cron');
    element(by.model('cronjob.cron')).sendKeys('5 * * * *');

    $('button.btn-primary').click();

    browser.wait(EC.visibilityOf($('div.alert-success')), 5000);

    expect($('div.alert-success > div').getText()).toEqual('Cronjob successful created');
  });

  it('Update cronjob', function() {
    browser.get('#!/cronjob');

    var EC = protractor.ExpectedConditions;

    element.all(by.css('div.fusio-options a:nth-child(1)')).first().click();

    browser.wait(EC.visibilityOf($('div.modal-body')), 5000);

    expect(element(by.model('cronjob.name')).getAttribute('value')).toEqual('New-Cron');
    expect(element(by.model('cronjob.cron')).getAttribute('value')).toEqual('5 * * * *');

    $('button.btn-primary').click();

    browser.wait(EC.visibilityOf($('div.alert-success')), 5000);

    expect($('div.alert-success > div').getText()).toEqual('Cronjob successful updated');
  });

  it('Delete cronjob', function() {
    browser.get('#!/cronjob');

    var EC = protractor.ExpectedConditions;

    element.all(by.css('div.fusio-options a:nth-child(2)')).first().click();

    browser.wait(EC.visibilityOf($('div.modal-body')), 5000);

    expect(element(by.model('cronjob.name')).getAttribute('value')).toEqual('New-Cron');

    $('button.btn-primary').click();

    browser.wait(EC.visibilityOf($('div.alert-success')), 5000);

    expect($('div.alert-success > div').getText()).toEqual('Cronjob successful deleted');
  });

});
