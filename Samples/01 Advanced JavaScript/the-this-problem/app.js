class App {
    run() {
        this.id = 123;

        setTimeout(() => {
            this.internalRun();
        }, 1000);
    }

    internalRun() {
        console.log("OK", this.id);
    }
}

const app = new App();
app.run();

