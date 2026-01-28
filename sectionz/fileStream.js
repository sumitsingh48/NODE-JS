const { Readable } = require("stream");

const inStream = new Readable({
  read() {}
});

inStream.push("Welcome to file_stream class");
inStream.push("Data are there in the form of chunk");

inStream.push(null);
inStream.pipe(process.stdout);