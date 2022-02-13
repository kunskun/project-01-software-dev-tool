import * as mongoose from 'mongoose'

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ServiceDocument = Service & mongoose.Document

@Schema({ collection: 'service' })
export class Service {
  servicePeriod: Date

  @Prop({ type: String, required: true })
  serviceName: string

  @Prop({ type: Number, required: true })
  serviceAmount: number

  @Prop({ type: Number, required: true })
  serviceMaxMember: number
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
