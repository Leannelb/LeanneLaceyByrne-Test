function initCalendars() {
    if (window.appContext) {
        $('#calendar').fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            defaultView: 'month',
            disableDragging: true,
            editable: false,
            droppable: true, // this allows things to be dropped onto the calendar
            events: appContext + '/calendarView/events',
            eventDrop:function( event, delta, revertFunc, jsEvent, ui, view ) {
                alert(event.title + " with id '"+event.id+"' was dropped on " + event.start.format());
                if (!confirm("Are you sure about this change?")) {
                    revertFunc();
                }
            },
            eventResize:function(){
                alert('eventResize');
            }
        });
    }
}
