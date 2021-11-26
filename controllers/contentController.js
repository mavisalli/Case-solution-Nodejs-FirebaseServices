const db = require("../db");
const httpStatus = require("http-status");

exports.createContent = async (req, res, next) => {
  const content = req.body;
  try {
    await db
      .collection("contents")
      .doc()
      .set({ ...content, creator: req.user.uid });
    res.send("Content saved successfully !");
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).send(error.message);
  }
};

exports.getContents = async (req, res) => {
  try {
    const contentQuerySnapshot = await db.collection("contents").get();
    const contents = [];
    contentQuerySnapshot.forEach((doc) => {
      contents.push({
        id: doc.id,
        data: doc.data(),
      });
    });
    res.status(200).json(contents);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getContentDetail = async (req, res) => {
  const id = req.params.id;
  try {
    const content = await db.collection("contents").doc(id).get();

    if (!content.exists) return res.status(404).send("Content not found");

    res.status(200).json({ id: content.id, data: content.data() });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.addSeason = async (req, res, next) => {
  try {
    const data = req.body;
    const contentRef = db.collection("contents").doc(req.params.id);

    let content = (await contentRef.get()).data();

    content.seasons.push(...data);

    await db.collection("contents").doc(req.params.id).set(content);
    res.send("new season added successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.addEpisode = async (req, res, next) => {
  try {
    const { id, seasonIndex } = req.params;

    const data = req.body;
    const contentRef = db.collection("contents").doc(id);

    let content = (await contentRef.get()).data();

    if (
      content.seasons[seasonIndex - 1].episodes &&
      content.seasons[seasonIndex - 1].episodes.length
    )
      content.seasons[seasonIndex - 1].episodes.push(...data);
    else
      content.seasons[seasonIndex - 1] = {
        ...content.seasons[seasonIndex - 1],
        episodes: data,
      };

    await db.collection("contents").doc(req.params.id).set(content);
    res.send("new episode added successfully");
  } catch (error) {
    res.status(400).send("No such season has been found!");
  }
};

exports.updateContent = async (req, res) => {
  try {
    await db
      .collection("contents")
      .doc(req.params.id)
      .set(req.body, { merge: true });
    res.send("content was updated successfully");
  } catch (error) {
    res.send(error);
  }
};

exports.deleteContent = async (req, res) => {
  try {
    await db.collection("contents").doc(req.params.id).delete();
    res.send("Document successfully deleted!");
  } catch (error) {
    res.send(error.message);
  }
};
