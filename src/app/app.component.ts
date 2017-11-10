import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    selectedField = 'name';
    isUpdate = false;
    CONSTANTS = {
        email: 'email'
    };
    user = this.initUser();

    users = [
        {
            name: 'Tiger Nixon',
            position: "System Architect",
            office: 'Edinburgh',
            email:'tiger@test.com',
            mobile: '1234567895',
            age: 38
        },{
            name:"Garrett Winters",
            position: "Accountant",
            office: "Tokyo",
            email:'garrett@test.com',
            mobile: '2234567895',
            age:51,
        },{
            name:"Ashton Cox",
            position: "Junior Technical Author",
            office: "San Francisco",
            email:'ashton@test.com',
            mobile: '3234567895',
            age:56,
        },{
            name:"Cedric Kelly",
            position:"Senior Javascript Developer",
            office:"Edinburgh",
            email:'cedric@test.com',
            mobile: '4234567895',
            age:24,
        },{
            name:"Brielle Williamson",
            position:"Integration Specialist",
            office:"New York",
            email:'brielle@test.com',
            mobile: '5234567895',
            age:24,
        }
    ];

    clone(obj) {
        let  attr;
        let copy;
        if (null == obj || 'object' !== typeof obj) {
            return obj;
        }
        copy = obj.constructor();
        for (attr in obj) {
            if (obj.hasOwnProperty(attr)) {
                copy[attr] = obj[attr];
            }
        }
        return copy;
    }

    initUser() {
        return {
            name: '',
            office: '',
            email:'',
            position:'',
            mobile: '',
            age: null
        }
    }

    setActionStatus(status) {
        this.isUpdate = status;
    }

    isDupclicateRecord(key, obj, arr) {
        let i;
        for (i = 0; i < arr.length; i += 1) {
            if (arr[i][key] === obj[key]) {
                return true;
            }
        }
        return false;
    }

    showModalForAdd(user) {
        this.user = this.initUser();
        this.setActionStatus(false);
    }

    addNewUser(user, f) {
        this.user = this.initUser();
        if (!this.isDupclicateRecord(this.CONSTANTS.email, user, this.users)) {
            f.resetForm();
            this.users.push(user);
        } else {
            alert('Duplicate record found. email is unique key');
        }
    }

    editUser(user) {
        this.setActionStatus(true);
        this.user = this.clone(user);
    }

    updateUser(user) {
        let i;
        for (i = 0; i < this.users.length; i += 1) {
            if (this.users[i][this.CONSTANTS.email] === user[this.CONSTANTS.email]) {
                this.users[i] = user;
            }
        }
    }

    removeUser(user) {
        this.users.splice(this.users.indexOf(user), 1);
    }

}
