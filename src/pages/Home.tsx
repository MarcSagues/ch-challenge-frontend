import React, { useEffect, useState } from "react";
import { useBooks } from "../hooks/useBooks";
import { Book } from "../interfaces/Books";

export default function Home() {
	const { books, deleteBook, editBook, addBooks } = useBooks();

	return (
		<div className="flex flex-row gap-5 justify-center items-center">
			<AddNewBook addBooks={addBooks} />
			<Table books={books} editBook={editBook} deleteBook={deleteBook} />
		</div>
	);
}

const AddNewBook = ({ addBooks }: { addBooks: Function }) => {
	const [newBook, setNewBook] = useState<Book>({
		id: 1,
		title: "",
		author: "",
	});
	return (
		<div className="flex flex-col w-3/6">
			<span>TITLE</span>
			<input
				onChange={(e) =>
					setNewBook({
						id: newBook.id,
						title: e.target.value,
						author: newBook.author,
					})
				}
			/>
			<span>AUTHOR</span>
			<input
				onChange={(e) =>
					setNewBook({
						id: newBook.id,
						title: newBook.title,
						author: e.target.value,
					})
				}
			/>

			<button onClick={() => addBooks(newBook)}>ADD NEW BOOK</button>
		</div>
	);
};

const Table = ({
	books,
	editBook,
	deleteBook,
}: {
	books: Array<Book>;
	editBook: Function;
	deleteBook: Function;
}) => {
	const [editable, setEditable] = useState(false);
	const [bookEdited, setBookEdited] = useState<Book>({
		id: 1,
		title: "",
		author: "",
		logo: "",
	});
	return (
		<table>
			<tr className="bg-green-600">
				<th className="p-2">ID</th>
				<th>TITLE</th>
				<th>AUTHOR</th>
				<th>LOGO</th>
				<th>EDIT</th>
				<th>DELETE</th>
			</tr>
			{books.map((book) => {
				return (
					<tr>
						{editable ? (
							<>
								<td>{String(book.id)}</td>
								<td>
									<input
										defaultValue={book.title}
										onChange={(e) => {
											setBookEdited({
												id: book.id,
												title: e.target.value,
												author: bookEdited.author,
											});
										}}
									/>
								</td>
								<td>
									<input
										defaultValue={book.author}
										onChange={(e) => {
											setBookEdited({
												id: book.id,
												title: bookEdited.title,
												author: e.target.value,
											});
										}}
									/>
								</td>
								<td>
									<img className="w-10" src={book.logo} />{" "}
								</td>
								<td>
									<button
										onClick={() => {
											editBook(book.id, bookEdited);
											setEditable(false);
										}}
									>
										confirm
									</button>
								</td>
							</>
						) : (
							<>
								<td>{String(book.id)}</td>
								<td>{book.title}</td>
								<td>{book.author}</td>
								<td>
									<img className="w-10" src={book.logo} />{" "}
								</td>
								<td>
									<button onClick={() => setEditable(true)}>
										edit
									</button>
								</td>
							</>
						)}
						<td>
							<button onClick={() => deleteBook(book.id)}>
								delete
							</button>
						</td>
					</tr>
				);
			})}
		</table>
	);
};
