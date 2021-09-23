const count = 10;
const countDisplay = () => {
  setTimeout(
    (cnt) => {
      document.getElementById("print1").innerHTML = cnt;
      setTimeout(
        (cnt) => {
          document.getElementById("print1").innerHTML = cnt;
          setTimeout(
            (cnt) => {
              document.getElementById("print1").innerHTML = cnt;
              setTimeout(
                (cnt) => {
                  document.getElementById("print1").innerHTML = cnt;
                  setTimeout(
                    (cnt) => {
                      document.getElementById("print1").innerHTML = cnt;
                      setTimeout(
                        (cnt) => {
                          document.getElementById("print1").innerHTML = cnt;
                          setTimeout(
                            (cnt) => {
                              document.getElementById("print1").innerHTML = cnt;
                              setTimeout(
                                (cnt) => {
                                  document.getElementById("print1").innerHTML =
                                    cnt;
                                  setTimeout(
                                    (cnt) => {
                                      document.getElementById(
                                        "print1"
                                      ).innerHTML = cnt;
                                      setTimeout(
                                        (cnt) => {
                                          document.getElementById(
                                            "print1"
                                          ).innerHTML = cnt;
                                          setTimeout(() => {
                                            document.getElementById(
                                              "print1"
                                            ).innerHTML =
                                              "Happy Independence Day";
                                          }, 2000);
                                        },
                                        2000,
                                        count - 9
                                      );
                                    },
                                    2000,
                                    count - 8
                                  );
                                },
                                2000,
                                count - 7
                              );
                            },
                            2000,
                            count - 6
                          );
                        },
                        2000,
                        count - 5
                      );
                    },
                    2000,
                    count - 4
                  );
                },
                2000,
                count - 3
              );
            },
            2000,
            count - 2
          );
        },
        2000,
        count - 1
      );
    },
    2000,
    count
  );
};

countDisplay();
