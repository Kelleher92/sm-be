import * as mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  name: String,
  description: String,
  file: {
    data: Buffer,
    contentType: String,
  },
  // author: {
  // 	id: {
  // 		type: mongoose.Schema.Types.ObjectId,
  // 		ref: 'User'
  // 	},
  // 	username: String
  // },
  // surfaces: [
  // 	{
  // 		type: mongoose.Schema.Types.ObjectId,
  // 		ref: 'Surface'
  // 	}
  // ]
});

// Compile model from schema
const Project = mongoose.model('Project', projectSchema);

export default Project;
