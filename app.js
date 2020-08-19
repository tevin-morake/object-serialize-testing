const  objectSerialize = require('whiz-object-serialize');

//Create an instance of the serializer object
const newSerializer = objectSerialize();
/* 
 * newSerializer has 2 functions : serialize(<objectTypeName>, <pathToFileToSerialize>) and deserialize(<objectTypeName>, <pathToFileToDeSerialize>)
*/
newSerializer.serialize("object", "./input/object.json");

// newSerializer.deserialize("object", "./output/object.txt");