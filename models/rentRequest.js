const mongoose = require('mongoose');

const rentRequestSchema = new mongoose.Schema({
    propertyId: { 
        type: String, 
        required: true 
    },
    propertyOwnerId: { 
        type: String, 
        required: true 
    },
    requestingUserId: { 
        type: String, 
        required: true 
    },
    fullName: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        trim: true, 
        required: [true, 'Email must be provided'],
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email',
        ]
    },
    nationalId: {
        type: String,
        required: false,
    },
    passportNumber: {
        type: String, 
        required: false
    },
    phone: { 
        type: String, 
        required: true,
        maxlength: 12,
        minlength: 10,
    },
    age: { 
        type: Number, 
        required: false 
    },
    activityType: { 
        type: String, 
        required: false 
    },
    activityDescription: { 
        type: String, 
        required: false 
    },
    gender: { 
        type: String, 
        required: false 
    },
    mightNeedToShare: { 
        type: String, 
        required: true,
        enum: {
            values: ["Yes", "No", "Don't know yet"],
            message: '{VALUE} is not supported as a choice.',
        },
        default: "Don't know yet" 
    },
    allowedToShare: { 
        type: String, 
        required: true,
        enum: {
            values: ["Yes", "No"],
            message: '{VALUE} is not supported as a permission to repost.',
        },
        default: "No"
    },
    comment: { 
        type: String, 
        required: false 
    },
    sendDate: { 
        type: Date, 
        required: true,
        default: Date.now() 
    },
    status: { 
        type: String, 
        required: true,
        default: 'Pending',
        enum: {
            values: ['Pending', 'Accepted', 'Rejected'],
            message: '{VALUE} is not supported as a request status.',
        } 
    },
    response: { 
        type: String, 
        required: false 
    },
    responseDate: { 
        type: Date, 
        required: false 
    }
}) 

module.exports = mongoose.model('RentRequest', rentRequestSchema);