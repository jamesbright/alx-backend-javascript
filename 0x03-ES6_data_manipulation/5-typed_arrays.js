// Returns a new ArrayBuffer with an Int8 at a specific position.
export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);

  try {
    view.setInt8(position, value);
  } catch (e) {
    throw Error('Position outside range');
  }
  return view;
}
