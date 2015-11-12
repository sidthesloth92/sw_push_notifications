self.addEventListener('push', function(event) {
    console.log('Received a push message', event);

    event.waitUntil(
        self.registration.showNotification("Push Notification")
    );
});
