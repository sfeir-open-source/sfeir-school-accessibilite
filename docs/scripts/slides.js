import { SfeirThemeInitializer } from '../web_modules/sfeir-school-theme/sfeir-school-theme.mjs';

// One method per module
function schoolSlides() {
	return [
		'00-school/00-TITLE.md',
		'00-school/00-speaker-pauline.md',
		'00-school/00-speaker-pierre.md',
		'00-school/00-participant.md',
		'00-school/00-deroulement.md',
		'00-school/00-slides.md',
		'00-school/00-repository.md',
		'00-school/00-plan.md'
	];
}

function svelteSlides() {
	return [
		'01-svelte-kezako/01-TITLE.md',
		'01-svelte-kezako/01-logo-rich-harris.md',
		'01-svelte-kezako/01-compiler.md',
		'01-svelte-kezako/01-dom-vs-virtual.md',
		'01-svelte-kezako/01-lets-go.md',
		'01-svelte-kezako/01-repl-link.md'
	];
}

function componentBaseSlides() {
	return [
		'02-component-base/02-TITLE.md',
		'02-component-base/02-component-file.md',
		'02-component-base/02-props-nested.md',
		'02-component-base/02-workshop-01.md'
	];
}

function slotsSlides() {
	return [
		'03-slots/03-TITLE.md',
		'03-slots/03-slot-basic.md',
		'03-slots/03-slot-named.md',
		'03-slots/03-workshop-02.md'
	];
}

function stateAndEventsSlides() {
	return [
		'04-state-and-events/04-TITLE.md',
		'04-state-and-events/04-assignment.md',
		'04-state-and-events/04-mutation.md',
		'04-state-and-events/04-dollar.md',
		'04-state-and-events/04-event.md',
		'04-state-and-events/04-event-modifier.md',
		'04-state-and-events/04-event-component.md',
		'04-state-and-events/04-workshop-03.md'
	];
}

function eachIfSlides() {
	return [
		'05-each-if/05-TITLE.md',
		'05-each-if/05-if.md',
		'05-each-if/05-if-else.md',
		'05-each-if/05-if-else-if-else.md',
		'05-each-if/05-each.md',
		'05-each-if/05-each-keyed.md',
		'05-each-if/05-workshop-04.md'
	];
}
function lifecyclesSlides() {
	return [
		'06-lifecycles/06-TITLE.md',
		'06-lifecycles/06-onMount.md',
		'06-lifecycles/06-apicall.md',
		'06-lifecycles/06-update.md',
		'06-lifecycles/06-onDestroy.md',
		'06-lifecycles/06-tick.md',
		'06-lifecycles/06-workshop-05.md'
	];
}

function storesSlides() {
	return [
		'07-stores/07-TITLE.md',
		'07-stores/07-props-drilling.md',
		'07-stores/07-store-live-coding.md',
		'07-stores/07-svelte-elements.md',
		'07-stores/07-workshop-06.md'
	];
}

function formSlides() {
	return [
		'08-form/08-TITLE.md',
		'08-form/08-text.md',
		'08-form/08-checkbox.md',
		'08-form/08-select.md',
		'08-form/08-group.md',
		'08-form/08-binding-component.md',
		'08-form/08-this.md',
		'08-form/08-this-component.md',
		'08-form/08-workshop-07.md'
	];
}

function svelteKitSlides() {
	return [
		'09-sveltekit/09-TITLE.md',
		'09-sveltekit/09-presentation.md',
		'09-sveltekit/09-files-structures.md',
		'09-sveltekit/09-workshop-08.md'
	];
}

function formation() {
	return [
		//
		...schoolSlides(), //
		...svelteSlides(), //
		...componentBaseSlides(), //
		...slotsSlides(), //
		...stateAndEventsSlides(), //
		...eachIfSlides(), //
		...lifecyclesSlides(), //
		...storesSlides(), //
		...formSlides(), //
		...svelteKitSlides() //
	].map((slidePath) => {
		return { path: slidePath };
	});
}

SfeirThemeInitializer.init(formation);
