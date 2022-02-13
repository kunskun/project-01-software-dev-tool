import * as mongoose from 'mongoose'

export const ServiceSchema = new mongoose.Schema({
  serviceName: String,
  serviceAmount: Number,
  servicePeriod: Date,
  serviceMaxMember: Number
}, {
  collection: 'service'
})
