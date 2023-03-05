import { Book } from "./../interfaces/Books";
import { useEffect, useState } from "react";
export const useBooks = () => {
	const [books, setBooks] = useState<Array<Book>>([]);

	useEffect(() => {
		const getBooks = async () => {
			try {
				await fetch("http://localhost:4000/books", {
					method: "GET",
					mode: "cors",
					cache: "no-cache",
					headers: {
						"Content-Type": "application/json",
					},
				})
					.then((response) => response.json())
					.then((res) => setBooks(res.message));
			} catch (error) {
				return null;
			}
		};

		getBooks();
	});

	const deleteBook = async (id: number) => {
		try {
			await fetch("http://localhost:4000/delete/book/" + id, {
				method: "POST",
				mode: "cors",
				cache: "no-cache",
				headers: {
					"Content-Type": "application/json",
				},
			})
				.then((response) => response.json())
				.then((res) => console.log(res.message));
		} catch (error) {
			return null;
		}
	};

	const addBooks = async (newBook: Book) => {
		try {
			await fetch("http://localhost:4000/books/", {
				method: "POST",
				mode: "cors",
				cache: "no-cache",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newBook),
			})
				.then((response) => response.json())
				.then((res) => console.log(res.message));
		} catch (error) {
			return null;
		}
	};

	const editBook = async (id: number, book: Book) => {
		try {
			await fetch("http://localhost:4000/books/" + id, {
				method: "POST",
				mode: "cors",
				cache: "no-cache",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(book),
			})
				.then((response) => response.json())
				.then((res) => console.log(res.message));
		} catch (error) {
			return null;
		}
	};

	return { books, deleteBook, addBooks, editBook };
};
