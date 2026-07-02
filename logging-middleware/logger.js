const LOG_API = "http://4.224.186.213/evaluation-service/logs";


const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMzEyMDQ1QG5lYy5lZHUuaW4iLCJleHAiOjE3ODI5NzU5OTIsImlhdCI6MTc4Mjk3NTA5MiwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjdhYzgzY2Y4LTY3OWQtNDU1NS04ZjkwLTQ5ZDE0YjZlZWQ4NiIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6ImFuYW50aGFqb3RoaSB0Iiwic3ViIjoiYTQ1MTNmMjQtYTRhNC00MGViLWI3MTMtZmY1MjRlZjQ5MjJkIn0sImVtYWlsIjoiMjMxMjA0NUBuZWMuZWR1LmluIiwibmFtZSI6ImFuYW50aGFqb3RoaSB0Iiwicm9sbE5vIjoiMjMxMjA0NSIsImFjY2Vzc0NvZGUiOiJFUnpVeXgiLCJjbGllbnRJRCI6ImE0NTEzZjI0LWE0YTQtNDBlYi1iNzEzLWZmNTI0ZWY0OTIyZCIsImNsaWVudFNlY3JldCI6InZ4VGVRYk15TURDcUhScVAifQ.0s_Vya6eSRgqyOxPq7wditTplZjiUmm1xApCrDm54zM";
/**
 * Reusable Logging Function
 * @param {string} stack - backend | frontend
 * @param {string} level - debug | info | warn | error | fatal
 * @param {string} packageName - package name
 * @param {string} message - log message
 */
export async function Log(stack, level, packageName, message) {
    try {
        const response = await fetch(LOG_API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${ACCESS_TOKEN}`
            },
            body: JSON.stringify({
                stack,
                level,
                package: packageName,
                message
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "Log API Error");
        }

        console.log("Log Created:", data);

        return data;
    } catch (error) {
        console.error("Logger Error:", error.message);
        return null;
    }
}