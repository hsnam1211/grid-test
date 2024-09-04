describe("앱을 렌더링합니다.", () => {
  test("버튼이 있습니다.", () => {
    render(<SimpleToggle />);

    // "유저정보 보기" 버튼을 찾습니다.
    const button = screen.getByRole("button", {
      name: "유저정보 보기",
    });

    // 버튼이 존재하는지 체크합니다.
    expect(button).toBeInTheDocument();
  });

  test("버튼을 누르지 않았을 시, 유저 정보 안내문이 보입니다.", () => {
    render(<SimpleToggle />);

    // 텍스트를 찾습니다.
    const text = screen.getByText("유저 정보를 보려면 버튼을 누르세요.");

    // 텍스트가 존재하는지 체크합니다.
    expect(text).toBeInTheDocument();
  });
});
