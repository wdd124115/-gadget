// dataAPI.js

class Data {
    constructor(data) {
        this._data = data;
        this.observerList = [];
    }

    get data() {
        return this._data;
    }

    set data(value) {
        this._data = value;
        this.notify();
    }

    attach(observer) {
        this.observerList.push(observer);
    }

    detach(observer) {
        this.observerList = this.observerList.filter(item => item !== observer);
    }

    notify() {
        this.observerList.forEach(observer => observer.update(this._data));
    }
}

class Observer {
    constructor(data) {
        this.data = data;
        this.data.attach(this);
    }

    update(value) {
        throw new Error('Not implemented');
    }
}

class Monitor extends Observer {
    constructor(data) {
        super(data);
    }

    print() {
        console.log(this.data);
    }

    update(value) {
        this.data = value;
        this.print();
    }
}

class Billboard extends Observer {
    constructor(data) {
        super(data);
    }

    display() {
        console.log(this.data);
    }

    update(value) {
        this.data = value;
        this.display();
    }
}

export function CreateResponseData(initialValue) {
    const dataObj = new Data(initialValue);

    const observer = {
        monitor: new Monitor(dataObj),
        billboard: new Billboard(dataObj)
    };

    return {
        data: dataObj,
        observer
    };
}