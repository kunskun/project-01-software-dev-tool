import * as mongoose from 'mongoose'

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ServiceDocument = Service & mongoose.Document

@Schema({ collection: 'service' })
export class Service {

  @Prop({ type: String, required: true })
  serviceName: string

  @Prop({ type: Number, required: true })
  serviceAmount: number

  @Prop({ type: Number, required: true })
  serviceMaxMember: number

  @Prop({ type: Date, required: true })
  servicePeriod: Date
}

export const ServiceSchema = SchemaFactory.createForClass(Service)

// export const ServiceSchema = new mongoose.Schema({
//   serviceName: String,
//   serviceAmount: Number,
//   servicePeriod: Date,
//   serviceMaxMember: Number
// }, {
//   collection: 'service'
// })