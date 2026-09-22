def calculate_average(numbers):
    total = 0
    for number in numbers:
        total += number
    return total / len(numbers)


def find_largest(numbers):
    if not numbers:
        raise ValueError("numbers must not be empty")

    largest = numbers[0]
    for number in numbers[1:]:
        if number > largest:
            largest = number
    return largest


def main():
    numbers = [10, 20, 30, 40, 50]

    print("Numbers:", numbers)
    print("Average:", calculate_average(numbers))
    print("Largest:", find_largest(numbers))

    name = input("Enter your name: ")
    print("Hello, " + name)

    age = int(input("Enter your age: "))
    if age >= 18:
        print("You are an adult.")
    else:
        print("You are a minor.")

    result = numbers[-1]
    print("Result:", result)

main()
