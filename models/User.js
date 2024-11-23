const bcrypt = require("bcrypt");

router.post("/signup", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required." });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10); 

        const query = "INSERT INTO users (email, password) VALUES (?, ?)";
        db.query(query, [email, hashedPassword], (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: "Database error." });
            }

            res.status(201).json({ message: "User registered successfully!" });
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error." });
    }
});
