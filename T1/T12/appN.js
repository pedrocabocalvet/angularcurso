var app = angular.module('myApp', [
	'ngLocalize',
	'ngLocalize.Config'
]);


app.value('localeConf', {
	basePath: 'languages',
	defaultLocale: 'es-ES',
	sharedDictionary: 'common',
	fileExtension: '.lang.json',
	persistSelection: true,
	cookieName: 'COOKIE_LOCALE_LANG',
	observableAttrs: new RegExp('^data-(?!ng-|i18n)'),
	delimiter: '::'
})

app.value('localeSupported', ['en-UK', 'es-ES', 'de-DE', 'fr-FR']);

app.controller('EjercicioLocalizacion', function($scope, locale, localeEvents) {
	$scope.setLocale = locale.setLocale;
});

app.controller('EventsLocalizacion', function($scope, locale, localeEvents) {
	$scope.actual = locale.getLocale();

	$scope.$on(localeEvents.resourceUpdates, function(){
		console.log('resourceUpdates');
	});

	$scope.$on(localeEvents.localeChanges, function(event, data){
		console.log('localChanges');
		$scope.actual = data;
	});

});
