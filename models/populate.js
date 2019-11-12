const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  age: Number,
  events: [{ type: Schema.Types.ObjectId, ref: 'Event' }]
});

const eventSchema = Schema({
  author: { type: Schema.Types.ObjectId, ref: 'Author' },
  title: String,
  volunteers: [{ type: Schema.Types.ObjectId, ref: 'Volunteers' }]
});

const Event = mongoose.model('Event', eventSchema);
const User = mongoose.model('User', userSchema);

const author = new Person({
    _id: new mongoose.Types.ObjectId(),
    name: 'Molly P',
  });
  
  author.save(function (err) {
    if (err) return handleError(err);
  
    const event1 = new Story({
      title: 'Church Event',
      author: author._id 
    });
  
    event1.save(function (err) {
      if (err) return handleError(err);
    });
  });

  Event.
  findOne({ title: 'Church Event' }).
  populate('author').
  exec(function (err, event) {
    if (err) return handleError(err);
    console.log('The author is %s', event.author.name);
  });

  Event.findOne({ title: 'Church Event' }, function(error, event) {
    if (error) {
      return handleError(error);
    }
    event.author = author;
    console.log(event.author.name);
  });

  await Person.deleteMany({ name: 'Molly P' });

const event = await Event.findOne({ title: 'Church Event' }).populate('author');
event.author;

const eventSchema = Schema({
    authors: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    title: String
  });
  
  const event = await Story.findOne({ title: 'Church Event' }).populate('authors');
  event.authors;

  Event.
  findOne({ title: /Church Event/i }).
  populate('author', 'name').
  exec(function (err, event) {
    if (err) return handleError(err);

    console.log('The author is %s', event.author.name);

    console.log('The authors age is %s', event.author.age);

  });

  MySchema.pre('find', function() {
    this.populate('user');
  });

  MySchema.post('find', async function(docs) {
    for (let doc of docs) {
      if (doc.isPublic) {
        await doc.populate('user').execPopulate();
      }
    }
  });

  MySchema.post('save', function(doc, next) {
    doc.populate('user').execPopulate().then(function() {
      next();
    });
  });
  